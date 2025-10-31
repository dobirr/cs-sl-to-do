const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="col-md-6">
          <h5>Todo App</h5>
          <p className="mb-1">Manage your task efficiently</p>
          <p className="mb-0">
            <i className="bi bi-telefon"> Contact: 98446563756</i>
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="mb-0">
            <a href="#about" className="text-light me-3">
              About
            </a>
            <a href="#contact" className="text-light me-3">
              Contact
            </a>
            <a href="#privacy" className="text-light me-3">
              Privacy
            </a>
          </p>
          <small className="text-muted">
            2025 Todo App, All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
