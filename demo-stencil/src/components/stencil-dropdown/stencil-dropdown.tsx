import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-dropdown',
  styleUrl: 'stencil-dropdown.css',
  shadow: true,
})
export class StencilDropdown {

  render() {
    return (
      <Host>
        <dropdown-select>
        <dropdown-option>
            <dropdown-button>
            <input type="search" placeholder="Search"/>
            </dropdown-button>
          </dropdown-option>
        <dropdown-option>
            <dropdown-button>
            <input type="checkbox" />
              Select DropDown Option All
            </dropdown-button>
          </dropdown-option>
          <dropdown-option>
            <dropdown-button>
            <input type="checkbox" />
              Select Drop Down Option-A
            </dropdown-button>
          </dropdown-option>
          <dropdown-option>
            <dropdown-button>
            <input type="checkbox" />
              Select Drop Down Option-B
            </dropdown-button>
          </dropdown-option>
          <dropdown-option>
            <dropdown-button>
            <input type="checkbox" />
              Select Drop Down Option-C
            </dropdown-button>
          </dropdown-option>
        </dropdown-select>
      </Host>
    );
  }

}
