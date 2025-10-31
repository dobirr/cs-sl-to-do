import { type FC } from 'react';
import { useParams } from 'react-router-dom';

interface WelcomeProps {
  user?: User;
}

const Welcome: FC<WelcomeProps> = () => {
  const { username } = useParams<{ username: string }>();

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Welcome to Todo App</h4>
            </div>
            <div className="card-body">
              <h5>Hello, {username}</h5>
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
