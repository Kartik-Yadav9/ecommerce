import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import CustomInput from "@/components/custom-input/CustomInput";

function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-orange-600 basis-1/2 rounded-r-full">
        .
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Welcome back
              </CardTitle>
              <CardDescription className="text-lg">
                 Please login to your account
              </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <CustomInput config={{
                  id: "email",
                  type: "email",
                  placeholder: "you@example.com"
                }} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <CustomInput config={{
                  id: "password",
                  type: "password",
                  placeholder: "••••••••"
                }} />
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

export default Login;
