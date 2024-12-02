

# React Use Form with React Hook Form Library

A project that demonstrates the integration and use of the [React Hook Form](https://www.react-hook-form.com/get-started/) library for efficient and customizable form handling in React. Built using [Vite](https://vitejs.dev/) for a fast development environment.

---

## Features

- **Lightweight & Performant**: Optimized form handling with minimal re-renders.
- **Customizable**: Easily adaptable to various form validation and UI requirements.
- **Developer-Friendly**: Simplified API and rich documentation for quick setup.
- **Modern Tooling**: Built using React and Vite for efficient development workflows.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sadu24/React-Use-Form.git
cd React-Use-Form
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the project running.

---

## How to Use

### Adding React Hook Form to Your Project

This project uses the `react-hook-form` library for form handling. To install it in your own project, use the following command:

```bash
npm install react-hook-form
```

For detailed documentation, visit the official React Hook Form [Get Started Guide](https://www.react-hook-form.com/get-started/).

### Example Usage

Here’s an example of a simple form implemented using React Hook Form:

```jsx
import React from "react";
import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
```

---

## Project Structure

The project structure follows a standard React and Vite setup:

```
React-Use-Form/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project configuration
└── vite.config.js      # Vite configuration
```

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Serves the production build locally.

---

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Resources

- [React Hook Form Documentation](https://www.react-hook-form.com/get-started/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)

---

### GitHub Repository

[React Use Form - GitHub](https://github.com/sadu24/React-Use-Form.git)
