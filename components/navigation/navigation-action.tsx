"use client";

import React from "react";
import ActionTooltip from "../action-tooltip";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          <div className="flex mx-3 h-[48px] w-[48px]
           rounded-[16px] transition-all
           overflow-hidden items-center justify-center dark:bg-neutral-700 bg-[#fbfbfb]
           group-hover:bg-indigo-500 group-hover:dark:bg-indigo-500">
             <Plus
               size={25}
               className="group-hover:text-white transition
             text-white-500 cursor-pointer"
             />
           </div>
         </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;