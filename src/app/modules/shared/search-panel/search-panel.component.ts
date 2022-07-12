import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SearchSetup } from '../../../store/shared/shared.actions';
import { SharedState } from '../../../store/shared/shared.state';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
})
export class SearchPanelComponent implements OnInit {
  @Select(SharedState.getSearchSetup)
  searchSetup$!: Observable<any>;

  constructor(private store: Store) { }

  searchPanelHide() {
    this.store.dispatch(new SearchSetup(false));
  }

  ngOnInit(): void { }
}
