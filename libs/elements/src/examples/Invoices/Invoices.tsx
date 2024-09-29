import {
  ChartNoAxesCombined,
  DollarSign,
  Ellipsis,
  FileWarning,
  LayoutDashboard,
  PackageSearch,
  User,
  Users,
} from 'lucide-react';
import { Avatar } from '~elements/Avatar';
import { Badge } from '~elements/Badge';
import { Button } from '~elements/Button';
import { Card } from '~elements/Card';
import { Navbar } from '~elements/Navbar';
import { Page } from '~elements/Page';
import { Pattern } from '~elements/Pattern';
import { Shell } from '~elements/Shell';
import { Sidebar } from '~elements/Sidebar';
import { Table } from '~elements/Table';

export function InvoicesExample() {
  return (
    <Shell
      Navbar={
        <Navbar>
          <Navbar.Logo>Reports</Navbar.Logo>
          <Avatar className="ml-auto">
            <Avatar.Fallback>AD</Avatar.Fallback>
          </Avatar>
        </Navbar>
      }
      Sidebar={
        <Sidebar>
          <Sidebar.Header>
            <Sidebar.Logo>Askides</Sidebar.Logo>
          </Sidebar.Header>
          <Sidebar.Group>
            <Sidebar.GroupTitle>Informations</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <Sidebar.GroupItem>
                <LayoutDashboard size={16} />
                <span>Dashboard</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <Users size={16} />
                <span>Customers</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <PackageSearch size={16} />
                <span>Products</span>
              </Sidebar.GroupItem>
            </Sidebar.GroupItems>
          </Sidebar.Group>
          <Sidebar.Group>
            <Sidebar.GroupTitle>Reports</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <Sidebar.GroupItem>
                <ChartNoAxesCombined size={16} />
                <span>Orders</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <FileWarning size={16} />
                <span>Complains</span>
              </Sidebar.GroupItem>
            </Sidebar.GroupItems>
          </Sidebar.Group>

          <Sidebar.Group>
            <Sidebar.GroupTitle>Settings</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <Sidebar.GroupItem>
                <User size={16} />
                <span>Profile</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <DollarSign size={16} />
                <span>Subscription</span>
              </Sidebar.GroupItem>
            </Sidebar.GroupItems>
          </Sidebar.Group>
        </Sidebar>
      }
    >
      <Page>
        <Page.Header>
          <Page.Title>Invoices</Page.Title>
          <Page.Description>
            Here is the list of all your invoices.
          </Page.Description>
        </Page.Header>
        <Page.Content>
          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-5">
              <Card className="p-4">
                <Card.Header className="space-y-0">
                  <Card.Description>
                    Paid invoices in the last 30 days.
                  </Card.Description>
                </Card.Header>
                <Card.Body className="mt-0">
                  <span className="text-2xl font-semibold tracking-tight">
                    1500
                  </span>
                </Card.Body>
                <Card.Actions className="mt-0 justify-end">
                  <Button art="ni" mass="sm">
                    View All
                  </Button>
                </Card.Actions>
              </Card>
              <Card className="p-4">
                <Card.Header className="space-y-0">
                  <Card.Description>
                    Unpaid invoices in the last 30 days.
                  </Card.Description>
                </Card.Header>
                <Card.Body className="mt-0">
                  <span className="text-2xl font-semibold tracking-tight">
                    200
                  </span>
                </Card.Body>
                <Card.Actions className="mt-0 justify-end">
                  <Button art="ni" mass="sm">
                    View All
                  </Button>
                </Card.Actions>
              </Card>
              <Card className="p-4">
                <Card.Header className="space-y-0">
                  <Card.Description>
                    Total amount of invoices in the last 30 days.
                  </Card.Description>
                </Card.Header>
                <Card.Body className="mt-0">
                  <span className="text-2xl font-semibold tracking-tight">
                    $25000
                  </span>
                </Card.Body>
                <Card.Actions className="mt-0 justify-end">
                  <Button art="ni" mass="sm">
                    View All
                  </Button>
                </Card.Actions>
              </Card>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden">
              <Table>
                <Table.Header>
                  <Table.Row className="hover:bg-transparent">
                    <Table.Head className="w-[100px] px-6">Invoice</Table.Head>
                    <Table.Head className="w-[140px]">Status</Table.Head>
                    <Table.Head>Method</Table.Head>
                    <Table.Head>Amount</Table.Head>
                    <Table.Head className="text-right px-6"></Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV001</Table.Cell>
                    <Table.Cell>
                      <Badge art="san">Paid</Badge>
                    </Table.Cell>
                    <Table.Cell>Credit Card</Table.Cell>
                    <Table.Cell>$250.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV002</Table.Cell>
                    <Table.Cell>
                      <Badge art="ni">Unpaid</Badge>
                    </Table.Cell>
                    <Table.Cell>Paypal</Table.Cell>
                    <Table.Cell>$150.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV003</Table.Cell>
                    <Table.Cell>
                      <Badge art="ni">Unpaid</Badge>
                    </Table.Cell>
                    <Table.Cell>Paypal</Table.Cell>
                    <Table.Cell>$350.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV004</Table.Cell>
                    <Table.Cell>
                      <Badge art="ichi">Pending</Badge>
                    </Table.Cell>
                    <Table.Cell>Debit Card</Table.Cell>
                    <Table.Cell>$50.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV005</Table.Cell>
                    <Table.Cell>
                      <Badge art="san">Paid</Badge>
                    </Table.Cell>
                    <Table.Cell>Credit Card</Table.Cell>
                    <Table.Cell>$100.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="font-medium px-6">INV006</Table.Cell>
                    <Table.Cell>
                      <Badge art="ni">Unpaid</Badge>
                    </Table.Cell>
                    <Table.Cell>Credit Card</Table.Cell>
                    <Table.Cell>$250.00</Table.Cell>
                    <Table.Cell className="text-right px-6">
                      <Button art="san" mass="xs" icon={true}>
                        <Ellipsis size={16} />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>

            <Card>
              <Card.Header>
                <Card.Title>Credit Notes</Card.Title>
                <Card.Description>
                  Here is the list of all your credit notes.
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                  <svg
                    aria-label="No sites created yet"
                    className="mx-auto mb-4 w-48"
                    width="178"
                    height="90"
                    viewBox="0 0 178 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>No sites created yet</title>
                    <rect
                      x="27"
                      y="50.5"
                      width="124"
                      height="39"
                      rx="7.5"
                      fill="currentColor"
                      className="fill-white"
                    />
                    <rect
                      x="27"
                      y="50.5"
                      width="124"
                      height="39"
                      rx="7.5"
                      stroke="currentColor"
                      className="stroke-gray-50"
                    />
                    <rect
                      x="34.5"
                      y="58"
                      width="24"
                      height="24"
                      rx="4"
                      fill="currentColor"
                      className="fill-gray-50"
                    />
                    <rect
                      x="66.5"
                      y="61"
                      width="60"
                      height="6"
                      rx="3"
                      fill="currentColor"
                      className="fill-gray-50"
                    />
                    <rect
                      x="66.5"
                      y="73"
                      width="77"
                      height="6"
                      rx="3"
                      fill="currentColor"
                      className="fill-gray-50"
                    />
                    <rect
                      x="19.5"
                      y="28.5"
                      width="139"
                      height="39"
                      rx="7.5"
                      fill="currentColor"
                      className="fill-white"
                    />
                    <rect
                      x="19.5"
                      y="28.5"
                      width="139"
                      height="39"
                      rx="7.5"
                      stroke="currentColor"
                      className="stroke-gray-100"
                    />
                    <rect
                      x="27"
                      y="36"
                      width="24"
                      height="24"
                      rx="4"
                      fill="currentColor"
                      className="fill-gray-100"
                    />
                    <rect
                      x="59"
                      y="39"
                      width="60"
                      height="6"
                      rx="3"
                      fill="currentColor"
                      className="fill-gray-100"
                    />
                    <rect
                      x="59"
                      y="51"
                      width="92"
                      height="6"
                      rx="3"
                      fill="currentColor"
                      className="fill-gray-100"
                    />
                    <g>
                      <rect
                        x="12"
                        y="6"
                        width="154"
                        height="40"
                        rx="8"
                        fill="currentColor"
                        className="fill-white"
                        shapeRendering="crispEdges"
                      />
                      <rect
                        x="12.5"
                        y="6.5"
                        width="153"
                        height="39"
                        rx="7.5"
                        stroke="currentColor"
                        className="stroke-gray-100"
                        shapeRendering="crispEdges"
                      />
                      <rect
                        x="20"
                        y="14"
                        width="24"
                        height="24"
                        rx="4"
                        fill="currentColor"
                        className="fill-gray-200"
                      />
                      <rect
                        x="52"
                        y="17"
                        width="60"
                        height="6"
                        rx="3"
                        fill="currentColor"
                        className="fill-gray-200"
                      />
                      <rect
                        x="52"
                        y="29"
                        width="106"
                        height="6"
                        rx="3"
                        fill="currentColor"
                        className="fill-gray-200"
                      />
                    </g>
                  </svg>

                  <div className="mx-auto max-w-sm">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-800">
                      No credit notes created yet.
                    </p>
                    <p className="mb-5 mt-2 text-base tracking-tight text-gray-500">
                      Create your first credit note to get started.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Pattern className="h-64" />
            </Card>
          </div>
        </Page.Content>
      </Page>
    </Shell>
  );
}
