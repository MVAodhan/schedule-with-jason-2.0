import { Page } from "@types";
import Link from "next/link";
import {
	useUser,
	SignIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";

const pages: Page[] = [
	{ id: 1, name: "Home", path: "/" },
	{ id: 2, name: "Add Episode", path: "/add" },
];

import { SlMenu } from "react-icons/sl";

const Nav = () => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link href="/">
					<div className="btn btn-ghost normal-case text-xl">
						Scheduled with Jason
					</div>
				</Link>
				<UserButton />
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 hidden sm:flex">
					{pages.map((page: Page) => (
						<li key={page.id}>
							<Link href={page.path}>{page.name}</Link>
						</li>
					))}
				</ul>
				<div className="dropdown dropdown-bottom dropdown-end sm:hidden">
					<label tabIndex={0} className="btn m-1">
						<SlMenu />
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						{pages.map((page: Page) => (
							<li key={page.id}>
								<Link href={page.path}>{page.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
