import { Button } from '~elements/Button';
import { Card } from '~elements/Card';
import { Input } from '~elements/Input';
import { Label } from '~elements/Label';
import { Select } from '~elements/Select';

export function PaymentCard() {
  return (
    <Card className="max-w-md">
      <Card.Header>
        <Card.Title>Payment Method</Card.Title>
        <Card.Description>
          Add a payment method to your account to start your subscription.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <div className="mt-6 space-y-4">
          <div className="space-y-1">
            <Label htmlFor="method">Payment Method</Label>
            <Select id="method">
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
              <option value="amex">American Express</option>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Name on Card</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="card">Card Number</Label>
            <Input id="card" placeholder="1234 1234 1234 1234" />
          </div>
          <div className="flex gap-x-3">
            <div className="space-y-1 w-2/5">
              <Label htmlFor="month">Month</Label>
              <Select id="month">
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </Select>
            </div>
            <div className="space-y-1 w-2/5">
              <Label htmlFor="year">Year</Label>
              <Select id="year">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Select>
            </div>
            <div className="space-y-1 w-1/5">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="123" />
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Actions className="mt-6">
        <Button art="ichi" className="w-full">
          Continue
        </Button>
      </Card.Actions>
    </Card>
  );
}
