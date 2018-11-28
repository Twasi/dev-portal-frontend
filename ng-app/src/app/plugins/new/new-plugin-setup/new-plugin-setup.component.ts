import {Component, isDevMode, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarkdownService} from '../../../markdown/markdown.service';
import {PlSetupNameValidationService} from './api/namevalidation/pl-setup-name-validation.service';
import {PlSetupDependenciesService} from './api/dependencies/pl-setup-dependencies.service';
import {PlSetupSettingsService} from './api/settings/pl-setup-settings.service';

@Component({
  selector: 'app-new-plugin-setup',
  templateUrl: './new-plugin-setup.component.html',
  styleUrls: ['./new-plugin-setup.component.scss']
})
export class NewPluginSetupComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private mdService: MarkdownService,
    private nameValidation: PlSetupNameValidationService,
    private dependencies: PlSetupDependenciesService,
    private settings: PlSetupSettingsService
  ) {
    // Set MD enabled by default:
    this.descriptionMdEnabled = true;
    // Load data: TODO: Load real data
    this.availableDependencies = dependencies.getTestData();
    this.availableSettings = settings.getTestData();
    // Load default values and fill selection with possible values:
    this.availableDependencies.forEach(value => this.depencySelection[value.id] = value.default);
    this.availableSettings.forEach(value => this.settingSelection[value.id] = value.default);
  }

  nameSetup: FormGroup;
  basepackage = 'de.merlinw.twasi.';

  descriptionSetup: FormGroup;
  descriptionMdEnabled: boolean;
  descriptionMd: string;

  depencySelection: object = {};
  availableDependencies: any[];

  settingSelection: object = {};
  availableSettings: any[];

  private previewDelay: any;

  devmode: () => boolean = isDevMode;

  ngOnInit() {
    this.nameSetup = this._formBuilder.group({
      nameSetupControl: ['', Validators.required]
    });
    this.descriptionSetup = this._formBuilder.group({
      descriptionSetupControl: []
    });
  }

  buildDescriptonPreview(): void {
    clearTimeout(this.previewDelay); // Clear to not create multiple timeouts at once
    const value = this.descriptionSetup.get('descriptionSetupControl').value;
    if (!value) {
      return;
    }
    if (this.descriptionMdEnabled) {
      this.previewDelay = setTimeout(() => {
        this.mdService.convertMdToHTML(value, true).then(html => {
          this.descriptionMd = html;
          this.previewDelay = null; // Set null to hide loader
        });
      }, 500);
    } else {
      this.previewDelay = null; // Set null to hide loader
      this.descriptionMd = this.mdService.escapeHTML(value);
    }
  }
}
