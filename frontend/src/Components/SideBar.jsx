import { BsCloudUploadFill } from "react-icons/bs";
import { BiBuoy } from "react-icons/bi";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards
} from "react-icons/hi";

const SideBar = () => {
  return (
    <div>
      {" "}
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img="/1.png" imgAlt="Flowbite logo">
          Book
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
              <p>Dashboard</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={BsCloudUploadFill}
            >
              <p>Upload Book</p>
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              <p>Mange Books</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              <p>Users</p>
            </Sidebar.Item>
            <Sidebar.Item href="/shop" target="_blank" icon={HiShoppingBag}>
              <p>Products</p>
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              <p>Sign In</p>
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              <p>Sign Up</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              <p>Upgrade to Pro</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              <p>Documentation</p>
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              <p>Help</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
