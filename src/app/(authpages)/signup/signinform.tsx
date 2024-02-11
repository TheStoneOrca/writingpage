"use client";

import SignUp from "@/actions/signup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setCookie } from "cookies-next";
import { Eye } from "lucide-react";
import { useState } from "react";
import FormError from "./formerror";

export default function SignUpForm() {
  const [isShowingPass, showPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sign Up To Writers' World!</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-y-4 h-96"
          action={(data) => {
            SignUp(data).then((res) => {
              if (res.error) {
                setError(error);
              } else {
                if (res.sessionid && res.success) {
                  localStorage.setItem("user_session", res.sessionid);
                }
              }
            });
          }}
        >
          <div className="flex justify-between">
            <div className="w-36">
              <Label>Username</Label>
              <Input className="mt-1" type="text" name="username" required />
            </div>

            <div className="w-36">
              <Label>Email</Label>
              <Input className="mt-1" type="email" name="email" required />
            </div>
          </div>

          <div>
            <Label>Password</Label>
            <div className="flex">
              {isShowingPass ? (
                <Input
                  type="text"
                  name="password"
                  value={password}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  className="mt-1"
                  required
                />
              ) : (
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  className="mt-1"
                  required
                />
              )}
              <Button
                onClick={() => showPassword(!isShowingPass)}
                type="button"
                className="mt-1"
              >
                <Eye className="dark:text-black text-white" />
              </Button>
            </div>
          </div>

          <FormError label="bleh" />

          <Button className="w-full">Create Account</Button>
        </form>
      </CardContent>
    </Card>
  );
}
