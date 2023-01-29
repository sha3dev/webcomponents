/**
 * imports
 */

import { Component, onMount, createSignal, onCleanup, JSX } from "solid-js";
import styles from "./navbar.module.scss";

/**
 * declares
 */

/**
 * consts
 */

const COMPONENT_NAME = "navbar";

/**
 * types
 */

export type Props = {
  logo: JSX.Element;
  cta: JSX.Element;
  children: JSX.Element;
};

/**
 * component
 */

const Navbar: Component<Props> = (props: Props) => {
  /**
   * refs
   */

  let $: HTMLDivElement;

  /**
   * private: attributes
   */

  /**
   * signals
   */

  const [isOpen, setIsOpen] = createSignal(false);

  /**
   * private: methods
   */

  /**
   * lifecycle
   */

  /**
   * render
   */

  return (
    <div ref={$!} class={`${COMPONENT_NAME} ${styles.component}`}>
      <div class="container">
        <div class="column">
          <div class="logo">{props.logo}</div>
        </div>
        <div class="column">
          <nav class="menu">{props.children}</nav>
          <div class="ctas">{props.cta}</div>
          <div
            class="burger"
            classList={{ open: isOpen() }}
            onClick={() => setIsOpen(!isOpen())}
          >
            <div class="burgerIconContainer">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * export
 */

export default Navbar;
