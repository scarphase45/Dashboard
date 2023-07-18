import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "icons/grid.svg",
		},

		{
			text: "Messages",
			icon: "icons/message-square-dots-svgrepo-com.svg",
		},
		{
			text: "Tasks",
			icon: "icons/task-svgrepo-com.svg",
		},
		{
			text: "Members",
			icon: "icons/users-svgrepo-com.svg",
		},

		{
			text: "Settings",
			icon: "icons/setting-svgrepo-com.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<h2>Project M</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default SideNavBar;
