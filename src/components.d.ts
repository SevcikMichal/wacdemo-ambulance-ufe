/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WacdemoAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface WacdemoAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface WacdemoAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface WacdemoAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWacdemoAmbulanceWlEditorElement;
}
export interface WacdemoAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWacdemoAmbulanceWlListElement;
}
declare global {
    interface HTMLWacdemoAmbulanceWlAppElement extends Components.WacdemoAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLWacdemoAmbulanceWlAppElement: {
        prototype: HTMLWacdemoAmbulanceWlAppElement;
        new (): HTMLWacdemoAmbulanceWlAppElement;
    };
    interface HTMLWacdemoAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLWacdemoAmbulanceWlEditorElement extends Components.WacdemoAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLWacdemoAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLWacdemoAmbulanceWlEditorElement, ev: WacdemoAmbulanceWlEditorCustomEvent<HTMLWacdemoAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLWacdemoAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLWacdemoAmbulanceWlEditorElement, ev: WacdemoAmbulanceWlEditorCustomEvent<HTMLWacdemoAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLWacdemoAmbulanceWlEditorElement: {
        prototype: HTMLWacdemoAmbulanceWlEditorElement;
        new (): HTMLWacdemoAmbulanceWlEditorElement;
    };
    interface HTMLWacdemoAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLWacdemoAmbulanceWlListElement extends Components.WacdemoAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLWacdemoAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLWacdemoAmbulanceWlListElement, ev: WacdemoAmbulanceWlListCustomEvent<HTMLWacdemoAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLWacdemoAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLWacdemoAmbulanceWlListElement, ev: WacdemoAmbulanceWlListCustomEvent<HTMLWacdemoAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLWacdemoAmbulanceWlListElement: {
        prototype: HTMLWacdemoAmbulanceWlListElement;
        new (): HTMLWacdemoAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "wacdemo-ambulance-wl-app": HTMLWacdemoAmbulanceWlAppElement;
        "wacdemo-ambulance-wl-editor": HTMLWacdemoAmbulanceWlEditorElement;
        "wacdemo-ambulance-wl-list": HTMLWacdemoAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface WacdemoAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface WacdemoAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: WacdemoAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface WacdemoAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: WacdemoAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "wacdemo-ambulance-wl-app": WacdemoAmbulanceWlApp;
        "wacdemo-ambulance-wl-editor": WacdemoAmbulanceWlEditor;
        "wacdemo-ambulance-wl-list": WacdemoAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wacdemo-ambulance-wl-app": LocalJSX.WacdemoAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLWacdemoAmbulanceWlAppElement>;
            "wacdemo-ambulance-wl-editor": LocalJSX.WacdemoAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLWacdemoAmbulanceWlEditorElement>;
            "wacdemo-ambulance-wl-list": LocalJSX.WacdemoAmbulanceWlList & JSXBase.HTMLAttributes<HTMLWacdemoAmbulanceWlListElement>;
        }
    }
}
