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
              <stencil-search label="Search"></stencil-search>
            </dropdown-button>
          </dropdown-option>

          {/* <dropdown-option>
            <dropdown-button>
              <stencil-checkbox label="Select DropDown Option All"></stencil-checkbox>
            </dropdown-button>
          </dropdown-option> */}

          <dropdown-option>
            <dropdown-button>
            <stencil-checkbox label="Select Drop Down Option-A"></stencil-checkbox>
            </dropdown-button>
          </dropdown-option>

          <dropdown-option>
            <dropdown-button>
            <stencil-checkbox label="Select Drop Down Option-B"></stencil-checkbox>
            </dropdown-button>
          </dropdown-option>

          <dropdown-option>
            <dropdown-button>
            <stencil-checkbox label="Select Drop Down Option-C"></stencil-checkbox>
            </dropdown-button>
          </dropdown-option>

{/*           
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
          </dropdown-option> */}


        </dropdown-select>
      </Host>
    );
  }

}
