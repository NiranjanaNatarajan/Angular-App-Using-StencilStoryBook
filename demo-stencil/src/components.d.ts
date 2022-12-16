/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ChartsDthree {
        "data": string;
        "height": number;
        "width": number;
    }
    interface DropdownButton {
        "disabled": boolean;
        "type": string;
        "weight": string;
    }
    interface DropdownDialog {
        "open": boolean;
    }
    interface DropdownOption {
    }
    interface DropdownSelect {
    }
    interface MyComponent {
    }
    interface StencilButton {
    }
    interface StencilDropdown {
    }
    interface StencilHint {
        "msg": any;
        "psw": boolean;
    }
    interface StencilInput {
        "minlength": number;
        "placeholder": string;
        "type": string;
        "value": any;
    }
    interface StencilLabel {
        "label": any;
    }
}
export interface DropdownDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLDropdownDialogElement;
}
export interface MyComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyComponentElement;
}
export interface StencilInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLStencilInputElement;
}
declare global {
    interface HTMLChartsDthreeElement extends Components.ChartsDthree, HTMLStencilElement {
    }
    var HTMLChartsDthreeElement: {
        prototype: HTMLChartsDthreeElement;
        new (): HTMLChartsDthreeElement;
    };
    interface HTMLDropdownButtonElement extends Components.DropdownButton, HTMLStencilElement {
    }
    var HTMLDropdownButtonElement: {
        prototype: HTMLDropdownButtonElement;
        new (): HTMLDropdownButtonElement;
    };
    interface HTMLDropdownDialogElement extends Components.DropdownDialog, HTMLStencilElement {
    }
    var HTMLDropdownDialogElement: {
        prototype: HTMLDropdownDialogElement;
        new (): HTMLDropdownDialogElement;
    };
    interface HTMLDropdownOptionElement extends Components.DropdownOption, HTMLStencilElement {
    }
    var HTMLDropdownOptionElement: {
        prototype: HTMLDropdownOptionElement;
        new (): HTMLDropdownOptionElement;
    };
    interface HTMLDropdownSelectElement extends Components.DropdownSelect, HTMLStencilElement {
    }
    var HTMLDropdownSelectElement: {
        prototype: HTMLDropdownSelectElement;
        new (): HTMLDropdownSelectElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLStencilButtonElement extends Components.StencilButton, HTMLStencilElement {
    }
    var HTMLStencilButtonElement: {
        prototype: HTMLStencilButtonElement;
        new (): HTMLStencilButtonElement;
    };
    interface HTMLStencilDropdownElement extends Components.StencilDropdown, HTMLStencilElement {
    }
    var HTMLStencilDropdownElement: {
        prototype: HTMLStencilDropdownElement;
        new (): HTMLStencilDropdownElement;
    };
    interface HTMLStencilHintElement extends Components.StencilHint, HTMLStencilElement {
    }
    var HTMLStencilHintElement: {
        prototype: HTMLStencilHintElement;
        new (): HTMLStencilHintElement;
    };
    interface HTMLStencilInputElement extends Components.StencilInput, HTMLStencilElement {
    }
    var HTMLStencilInputElement: {
        prototype: HTMLStencilInputElement;
        new (): HTMLStencilInputElement;
    };
    interface HTMLStencilLabelElement extends Components.StencilLabel, HTMLStencilElement {
    }
    var HTMLStencilLabelElement: {
        prototype: HTMLStencilLabelElement;
        new (): HTMLStencilLabelElement;
    };
    interface HTMLElementTagNameMap {
        "charts-dthree": HTMLChartsDthreeElement;
        "dropdown-button": HTMLDropdownButtonElement;
        "dropdown-dialog": HTMLDropdownDialogElement;
        "dropdown-option": HTMLDropdownOptionElement;
        "dropdown-select": HTMLDropdownSelectElement;
        "my-component": HTMLMyComponentElement;
        "stencil-button": HTMLStencilButtonElement;
        "stencil-dropdown": HTMLStencilDropdownElement;
        "stencil-hint": HTMLStencilHintElement;
        "stencil-input": HTMLStencilInputElement;
        "stencil-label": HTMLStencilLabelElement;
    }
}
declare namespace LocalJSX {
    interface ChartsDthree {
        "data"?: string;
        "height"?: number;
        "width"?: number;
    }
    interface DropdownButton {
        "disabled"?: boolean;
        "type"?: string;
        "weight"?: string;
    }
    interface DropdownDialog {
        "onOpenChanged"?: (event: DropdownDialogCustomEvent<any>) => void;
        "open"?: boolean;
    }
    interface DropdownOption {
    }
    interface DropdownSelect {
    }
    interface MyComponent {
        "onSubmitLogin"?: (event: MyComponentCustomEvent<any>) => void;
    }
    interface StencilButton {
    }
    interface StencilDropdown {
    }
    interface StencilHint {
        "msg"?: any;
        "psw"?: boolean;
    }
    interface StencilInput {
        "minlength"?: number;
        "onHandleChange"?: (event: StencilInputCustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: any;
    }
    interface StencilLabel {
        "label"?: any;
    }
    interface IntrinsicElements {
        "charts-dthree": ChartsDthree;
        "dropdown-button": DropdownButton;
        "dropdown-dialog": DropdownDialog;
        "dropdown-option": DropdownOption;
        "dropdown-select": DropdownSelect;
        "my-component": MyComponent;
        "stencil-button": StencilButton;
        "stencil-dropdown": StencilDropdown;
        "stencil-hint": StencilHint;
        "stencil-input": StencilInput;
        "stencil-label": StencilLabel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "charts-dthree": LocalJSX.ChartsDthree & JSXBase.HTMLAttributes<HTMLChartsDthreeElement>;
            "dropdown-button": LocalJSX.DropdownButton & JSXBase.HTMLAttributes<HTMLDropdownButtonElement>;
            "dropdown-dialog": LocalJSX.DropdownDialog & JSXBase.HTMLAttributes<HTMLDropdownDialogElement>;
            "dropdown-option": LocalJSX.DropdownOption & JSXBase.HTMLAttributes<HTMLDropdownOptionElement>;
            "dropdown-select": LocalJSX.DropdownSelect & JSXBase.HTMLAttributes<HTMLDropdownSelectElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "stencil-button": LocalJSX.StencilButton & JSXBase.HTMLAttributes<HTMLStencilButtonElement>;
            "stencil-dropdown": LocalJSX.StencilDropdown & JSXBase.HTMLAttributes<HTMLStencilDropdownElement>;
            "stencil-hint": LocalJSX.StencilHint & JSXBase.HTMLAttributes<HTMLStencilHintElement>;
            "stencil-input": LocalJSX.StencilInput & JSXBase.HTMLAttributes<HTMLStencilInputElement>;
            "stencil-label": LocalJSX.StencilLabel & JSXBase.HTMLAttributes<HTMLStencilLabelElement>;
        }
    }
}
