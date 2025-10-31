import { type FC } from 'react';

interface WelcomeProps {
  user: User;
}

const Welcome: FC<WelcomeProps> = ({ user }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-content-center">
              <h4>Welcome to Todo App</h4>
            </div>
            <div className="card-body">
              <h5>Hello, {user.email}</h5>
              <p className="text-muted">You have successfully logged in.</p>
              <p className="alert alert-info">
                <strong>Coming Soon: </strong>Todo functionality will be added
                here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
