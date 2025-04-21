import React from "react";
import {
  Form,
  Input,
  Button,
  Link,
  Checkbox,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as {
      email: string;
      password: string;
    };

    console.log("Form submitted:", data);

    if (data.email === "dileep@yopmail.com" && data.password === "12345") {
      navigate("/foods");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="w-full max-w-sm p-4 sm:p-6 flex flex-col gap-4 items-center justify-center m-auto">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-default-500">
          Enter your details to sign in
        </p>
      </div>

      <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          startContent={
            <Icon icon="lucide:mail" className="text-default-400" />
          }
        />

        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          name="password"
          type={isVisible ? "text" : "password"}
          startContent={
            <Icon icon="lucide:lock" className="text-default-400" />
          }
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon icon="lucide:eye-off" className="text-default-400" />
              ) : (
                <Icon icon="lucide:eye" className="text-default-400" />
              )}
            </button>
          }
        />

        <div className="flex items-center justify-between w-full">
          <Checkbox
            isSelected={rememberMe}
            onValueChange={setRememberMe}
            size="sm"
          >
            Remember me
          </Checkbox>
          <Link href="#" size="sm" className="text-primary">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" color="primary" size="lg" className="w-full">
          Sign in
        </Button>
      </Form>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-default-500">Don't have an account?</span>
        <Link href="#" size="sm">
          Sign up
        </Link>
      </div>
    </div>
  );
}
