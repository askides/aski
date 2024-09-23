import { Avatar } from '~elements/Avatar';
import { Button } from '~elements/Button';
import { Card } from '~elements/Card';
import { Navbar } from '~elements/Navbar';
import { Page } from '~elements/Page';
import { Pattern } from '~elements/Pattern';
import { Shell } from '~elements/Shell';
import { Sidebar } from '~elements/Sidebar';
import { Table } from '~elements/Table';
import {
  ChartNoAxesCombined,
  FileWarning,
  LayoutDashboard,
  PackageSearch,
  Users,
} from 'lucide-react';

export function Invoices() {
  return (
    <Shell
      Navbar={
        <Navbar>
          <Navbar.Logo>Invoices List</Navbar.Logo>
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
        </Sidebar>
      }
    >
      <Page>
        <Page.Content>
          <div className="space-y-5">
            <Card>
              <Card.Header>
                <Card.Title>Recent Invoices</Card.Title>
                <Card.Description>
                  A list of your recent invoices.
                </Card.Description>
              </Card.Header>
              <Card.Body className="-mx-6">
                <Table>
                  <Table.Header>
                    <Table.Row className="hover:bg-transparent">
                      <Table.Head className="w-[100px] px-6">
                        Invoice
                      </Table.Head>
                      <Table.Head>Status</Table.Head>
                      <Table.Head>Method</Table.Head>
                      <Table.Head className="text-right px-6">
                        Amount
                      </Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell className="font-medium px-6">
                        INV001
                      </Table.Cell>
                      <Table.Cell>Paid</Table.Cell>
                      <Table.Cell>Credit Card</Table.Cell>
                      <Table.Cell className="text-right px-6">
                        $250.00
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="font-medium px-6">
                        INV002
                      </Table.Cell>
                      <Table.Cell>Paid</Table.Cell>
                      <Table.Cell>Paypal</Table.Cell>
                      <Table.Cell className="text-right px-6">
                        $150.00
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell className="font-medium px-6">
                        INV003
                      </Table.Cell>
                      <Table.Cell>Paid</Table.Cell>
                      <Table.Cell>Credit Card</Table.Cell>
                      <Table.Cell className="text-right px-6">
                        $350.00
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Body>
              <Card.Actions className="justify-end mt-6">
                <Button mass="sm" art="ni">
                  View all invoices
                </Button>
              </Card.Actions>
            </Card>

            <Card>
              <Pattern className="h-48" />
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
