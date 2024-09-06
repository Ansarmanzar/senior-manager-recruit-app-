import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  Squares2X2Icon,
  NewspaperIcon,
  ArrowLeftOnRectangleIcon,
  ArrowPathIcon,
  UserGroupIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

const MobileMenu = ({ session, setOpen }) => {
  return (
    <>
      <div className="cursor-pointer text-gray-600 px-2 flex justify-center border-b-[1px] border-dashed mb-3 ">
        <p className="px-3 py-2"> {session?.user?.email}</p>
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer bg-gray-200 rounded-lg px-2 text-gray-600 shadow-lg"
      >
        <Link
          href={`/${session?.role}/dashboard`}
          className="flex items-center justify-start gap-2 px-3 py-2"
        >
          <NewspaperIcon className="w-6 h-6" />
          Dashboard
        </Link>
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer bg-gray-200 rounded-lg px-2 text-gray-600 shadow-lg "
      >
        <Link
          href={`/${session?.role}/profile`}
          className="flex items-center justify-start gap-2 px-3 py-2"
        >
          <Squares2X2Icon className="w-6 h-6" />
          Profile
        </Link>
      </div>

      {session?.role === "employer" && session?.userType === "executive" && (
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="cursor-pointer bg-gray-200 rounded-lg px-2 text-gray-600 shadow-lg "
        >
          <Link
            href={`/${session?.role}/manageuser`}
            className="flex items-center justify-start gap-2 px-3 py-2"
          >
            <UserGroupIcon className="w-6 h-6" />
            Manage User
          </Link>
        </div>
      )}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="cursor-pointer bg-gray-200 rounded-lg px-2 text-gray-600 shadow-lg "
      >
        <Link
          href={`/inbox`}
          className="flex items-center justify-start gap-2 px-3 py-2"
        >
          <EnvelopeIcon className="w-6 h-6" />
          Inbox
        </Link>
      </div>

      {session?.role === "employer" && (
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="cursor-pointer bg-gray-200 rounded-lg px-2 text-gray-600 shadow-lg "
        >
          <Link
            href={`/${session?.role}/account`}
            className="flex items-center justify-start gap-2 px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-6 h-6"
            >
              <path
                fill="#4B5563"
                id="XMLID_133_"
                d="M466.541,76.359H28.998C12.981,76.359,0,89.34,0,105.355v284.829c0,16.014,12.981,28.996,28.998,28.996
	h437.543c16.017,0,28.998-12.982,28.998-28.996V105.355C495.539,89.34,482.558,76.359,466.541,76.359z M252.641,125.116h108.858
	c6.805,0,12.324,5.521,12.324,12.324c0,6.804-5.52,12.324-12.324,12.324H252.641c-6.805,0-12.324-5.519-12.324-12.324
	C240.316,130.637,245.836,125.116,252.641,125.116z M192.818,214.617c-2.777,13.576-12.549,23.059-21.824,21.174
	c-0.914-0.185-1.749-0.555-2.567-0.931c-7.622,16.583-18.679,31.331-31.74,40.148v8.496c0,14.956,9.274,28.347,23.269,33.619
	c1.219,0.457,2.197,1.42,2.679,2.639c0.481,1.22,0.417,2.591-0.161,3.764l-19.609,39.635c-6.001,12.147-18.389,19.826-31.934,19.826
	c-13.543,0-25.93-7.679-31.931-19.826L59.39,323.526c-0.579-1.172-0.643-2.544-0.161-3.764c0.48-1.219,1.461-2.183,2.68-2.639
	c13.994-5.272,23.268-18.663,23.268-33.619v-8.496c-13.061-8.817-24.118-23.564-31.74-40.148c-0.818,0.376-1.654,0.746-2.567,0.931
	c-9.276,1.885-19.048-7.598-21.824-21.174c-2.743-13.584,2.535-26.124,11.843-28.018c0.48-0.097,0.963-0.041,1.461-0.08
	c0.498-40.927,30.953-73.968,68.582-73.968c37.631,0,68.087,33.041,68.586,73.968c0.498,0.039,0.979-0.017,1.46,0.08
	C190.281,188.493,195.561,201.033,192.818,214.617z M410.795,379.809H301.934c-6.802,0-12.321-5.52-12.321-12.324
	c0-6.803,5.52-12.324,12.321-12.324h108.861c6.805,0,12.324,5.521,12.324,12.324C423.119,374.289,417.6,379.809,410.795,379.809z
	 M443.658,314.083H252.641c-6.805,0-12.324-5.521-12.324-12.324c0-6.804,5.52-12.324,12.324-12.324h191.018
	c6.805,0,12.324,5.52,12.324,12.324C455.982,308.562,450.463,314.083,443.658,314.083z M443.658,248.355H252.641
	c-6.805,0-12.324-5.521-12.324-12.324c0-6.804,5.52-12.324,12.324-12.324h191.018c6.805,0,12.324,5.52,12.324,12.324
	C455.982,242.834,450.463,248.355,443.658,248.355z"
              />
            </svg>
            Account
          </Link>
        </div>
      )}

      <div
        onClick={() => {
          setOpen(!open);
          signOut();
        }}
        className="text-gray-600 cursor-pointer bg-gray-200 rounded-lg px-5 py-2 flex items-center justify-start gap-2 shadow-lg mb-4"
      >
        <ArrowLeftOnRectangleIcon className="w-6 h-6" />{" "}
        <p className="">Logout</p>
      </div>
    </>
  );
};

export default MobileMenu;
