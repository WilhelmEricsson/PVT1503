import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { InformationTabsComponent } from './information-tabs/information-tabs';
import { WeatherComponent } from './weather/weather';
@NgModule({
	declarations: [ProgressBarComponent,
    InformationTabsComponent,
    WeatherComponent],
	imports: [],
	exports: [ProgressBarComponent,
    InformationTabsComponent,
    WeatherComponent]
})
export class ComponentsModule {}
