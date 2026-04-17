import { PromptListComponent } from './components/prompt-list/prompt-list.component';
import { PromptDetailComponent } from './components/prompt-detail/prompt-detail.component';
import { AddPromptComponent } from './components/add-prompt/add-prompt.component';

export const routes = [
  { path: '', component: PromptListComponent },
  { path: 'prompts/:id', component: PromptDetailComponent },
  { path: 'add', component: AddPromptComponent }
];