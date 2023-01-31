/**
 * imports
 */

import "./navbar.scss";
import { Component, onMount, createSignal, onCleanup, JSX } from "solid-js";

/**
 * declares
 */

/**
 * consts
 */

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
    <div ref={$!} data-isopen={isOpen()} class="sha3-navbar">
      <div class="sha3-navbar__container">
        <div class="sha3-navbar__column">
          <div class="sha3-navbar__logo">{props.logo}</div>
        </div>
        <div class="sha3-navbar__column">
          <nav class="sha3-navbar__menu">{props.children}</nav>
          <div class="sha3-navbar__ctas">{props.cta}</div>
          <div class="sha3-navbar__burger" onClick={() => setIsOpen(!isOpen())}>
            <div class="sha3-navbar__burgerIconContainer">
              <div class="sha3-navbar__icon"></div>
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
