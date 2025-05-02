import { ServerWithMembersWithProfiles } from "@/types";
import { MemberRole } from "@prisma/client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import {
  ChevronDown,
  UserPlus,
  Settings,
  Users,
  PlusCircle,
  Trash,
  LogOut,
} from "lucide-react";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button
          className="w-full text-md font-semibold px-3
        flex items-center h-12 border-neutral-200 dark:border-neutral-800
        border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"
        >
          {server.name}
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 text-xs font-medium
      text-black dark:text-neutral-400 space-y-[2px]"
      >
        {isModerator && (
        <DropdownMenuItem
            className="group text-indigo-600 hover:text-white hover:bg-indigo-500 dark:hover:bg-indigo-600 px-3 py-2 text-sm cursor-pointer flex items-center justify-between"
        >
            Invite People
            <UserPlus className="h-4 w-4 text-inherit" />
        </DropdownMenuItem>
        )}

        {isAdmin && (
          <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
            Server Settings
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
            Manage Members
            <Users className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer">
            Create Channel
            <PlusCircle className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}

        {isModerator && <DropdownMenuSeparator />}

        {isAdmin && (
        <DropdownMenuItem
            className="group text-rose-500 hover:text-white hover:bg-rose-500 px-3 py-2 text-sm cursor-pointer flex items-center justify-between"
        >
            Delete Server
            <Trash className="h-4 w-4 text-inherit" />
        </DropdownMenuItem>
        )}
        {!isAdmin && (
        <DropdownMenuItem
            className="group text-rose-500 hover:text-white hover:bg-rose-500 px-3 py-2 text-sm cursor-pointer flex items-center justify-between"
        >
            Leave Server
            <LogOut className="h-4 w-4 text-inherit" />
        </DropdownMenuItem>
        )}

      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServerHeader;