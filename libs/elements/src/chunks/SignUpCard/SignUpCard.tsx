import { Button } from '~elements/Button';
import { Card } from '~elements/Card';
import { Input } from '~elements/Input';
import { Label } from '~elements/Label';

export function SignUpCard() {
  return (
    <Card className="max-w-sm">
      <Card.Header>
        <Card.Title>Sign Up</Card.Title>
        <Card.Description>
          Create an account and discover the worlds' best UI component
          framework.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <div className="flex gap-x-5">
          <Button art="ni" className="w-full">
            Google
          </Button>
          <Button art="ni" className="w-full">
            GitHub
          </Button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="hello@askides.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Your Password" />
          </div>
        </div>
      </Card.Body>
      <Card.Actions className="mt-6">
        <Button art="ichi" className="w-full">
          Create Account
        </Button>
      </Card.Actions>
    </Card>
  );
}
