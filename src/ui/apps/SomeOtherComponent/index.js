import React from 'react';

import urls from 'src/urls';

import Link from 'ui/common/Link';


export default function SomeOtherComponent(props) {
  return (
    <div>
      <h1>
        Some Other Component
      </h1>
      <p>
        You can try change the numbers in he url
      </p>
      <p>
        pk: { props.pk }
      </p>
      <p>
        someOtherPk: { props.someOtherPk }
      </p>
      <Link href={ urls.home.url() }>
        some component
      </Link>
    </div>
  );
}


SomeOtherComponent.defaultProps = {
  pk: 1,
  someOtherPk: 42
};
