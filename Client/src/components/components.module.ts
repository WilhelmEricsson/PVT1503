import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { InformationTabsComponent } from './information-tabs/information-tabs';
@NgModule({
	declarations: [ProgressBarComponent,
    InformationTabsComponent],
	imports: [],
	exports: [ProgressBarComponent,
    InformationTabsComponent]
})
export class ComponentsModule {}
