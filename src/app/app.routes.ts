import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainPointsComponent} from './features/pain-points/pain-points.component';
import { IdeasComponent } from './features/ideas/ideas.component';
import { ThoughtsComponent } from './features/thoughts/thoughts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pain-points', pathMatch: 'full' },
  { path: 'pain-points', component: PainPointsComponent },
  { path: 'ideas', component: IdeasComponent },
  { path: 'thoughts', component: ThoughtsComponent },
  // 其他路由可以按需继续添加
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
