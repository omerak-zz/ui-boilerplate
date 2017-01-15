// Don't use relative paths for anything you imported except components style.

// libraries, plugins
import React from 'react';

// constants, utilities vs
import urls from 'src/urls';

// components.
import Link from 'ui/common/Link';

// models, stores, reducers etc.

// actions or services etc.

// styles
import styles from './style.less';

// the other files in a splitted way accordig to their types


export default function SomeComponent() {
  return (
    <div className={ styles.root }>
      <h1>
        Apps
      </h1>
      <p>
        It's about different part of the project.
        <br/>
        You can use the components that you created inside the apps as a page.
        Or the directory you created is can be a part of the project, and pages
        can created inside
      </p>
      <h2>Common Components</h2>
      <p>
        <Link href={ urls.someOtherComponentDetail.url(1, 2) }>
          some other component
        </Link>
      </p>
    </div>

  );
}
