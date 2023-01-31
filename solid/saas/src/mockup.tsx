/**
 * imports
 */

import "./mockup.scss";
import { Component } from "solid-js";

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
    <div ref={$!} class="sha3-mockup">
      <div class="sha3-mockup__container">
        <div class="sha3-mockup__mockup sha3-mockup__mockup--desktop">
          <div class="sha3-mockup__placeholder sha3-mockup__placeholder--desktop">
            <img />
          </div>
          <img
            class="sha3-mockup__device sha3-mockup__device--desktop"
            src="/img/desktop.png"
          />
        </div>
        <div class="sha3-mockup__mockup sha3-mockup__mockup--mobile">
          <div class="sha3-mockup__placeholder sha3-mockup__placeholder--mobile">
            <img />
          </div>
          <img
            class="sha3-mockup__device sha3-mockup__device--mobile"
            src="/img/iphone.png"
          />
        </div>
      </div>
    </div>
  );
};

/**
 * export
 */

export default Mockup;
