const Footer = () => {
  return (
    <footer className="mt-auto bg-dark text-light text-center">
      <div className="container">
        <p className="py-3">&copy; MAranWebDev {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export { Footer };
