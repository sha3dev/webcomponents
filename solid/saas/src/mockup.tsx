/**
 * imports
 */

import { Component } from "solid-js";
import styles from "./mockup.module.scss";

/**
 * declares
 */

/**
 * consts
 */

const COMPONENT_NAME = "mockup";

/**
 * types
 */

export type Props = {
  autoScroll?: boolean;
};

/**
 * component
 */

const Mockup: Component<Props> = (props: Props) => {
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
        <div class="mockup desktop">
          <div class="placeholder">
            <img />
          </div>
          <img class="device" src="/img/desktop.png" />
        </div>
        <div class="mockup mobile">
          <div class="placeholder">
            <img />
          </div>
          <img class="device" src="/img/iphone.png" />
        </div>
      </div>
    </div>
  );
};

/**
 * export
 */

export default Mockup;
