import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function SigninForm() {
  const [password, setPassword] = useState<string>();
  const [isShowingPass, showPassword] = useState<boolean>();
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sign In To Writers' World!</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-y-5 h-96" action={(data) => {}}>
          <div>
            <Label>Username or Email</Label>
            <Input className="mt-1" type="text" name="username" required />
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

          <Button className="w-full">Create Account</Button>
        </form>
      </CardContent>
    </Card>
  );
}
