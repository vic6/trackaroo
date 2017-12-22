import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info dude</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && (
      <p>
        This is strictly confidential. Sharing will result in termination as
        well as loss of job.
      </p>
    )}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Log in dog</p>
      )}
    </div>
  );

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info='I am the coolest'/>, document.getElementById('app'));
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="I am the coolest" />,
  document.getElementById('app')
);
