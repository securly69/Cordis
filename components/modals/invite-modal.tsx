"use client";
 
 import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
 } from "../ui/dialog";
 import axios from "axios";
 import { useRouter } from "next/navigation";
 import { useModal } from "@/hooks/use-modal-store";
 import { Label } from "../ui/label";
 import { Input } from "../ui/input";
 import { useOrigin } from "@/hooks/use-origin";
 import { Button } from "../ui/button";
 import { useState } from "react";
 import { Check, Copy, RefreshCw } from "lucide-react";
 
 export const InviteModal = () => {
   const { isOpen, type, onClose, data, onOpen } = useModal();
   const origin = useOrigin();
   const router = useRouter();
 
   const isModalOpen = isOpen && type === "invite";
   const { server } = data;
 
   const [copied, setCopied] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
 
   const inviteUrl = `${origin}/invite/${server?.inviteCode}`;
 
   const onCopy = () => {
     navigator.clipboard.writeText(inviteUrl);
     setCopied(true);
     setTimeout(() => {
       setCopied(false);
     }, 1000);
   };
 
   const onNew = async () => {
     try {
       setIsLoading(true);
       const response = await axios.patch(
         `/api/servers/${server?.id}/invite-code`
       );
       onOpen("invite", { server: response.data });
     } catch (error) {
       console.log(error);
     } finally {
       setIsLoading(false);
     }
   };
   return (
     <Dialog open={isModalOpen} onOpenChange={onClose}>
       <DialogContent
         className="
         bg-white
         text-black
         p-0
         overflow-hidden
         "
       >
         <DialogHeader
           className="
         pt-8
         px-6
         "
         >
           <DialogTitle
             className="
           text-2xl
           text-center
           font-bold
           "
           >
             Invite Friends!
           </DialogTitle>
           <DialogDescription
             className="
           text-center
           text-zinc-500
           "
           >
             Invite your friends to keep your Cordis much more fun &
             interesting!
           </DialogDescription>
         </DialogHeader>
         <div className="p-6">
           <Label
             className="uppercase text-xs font-bold text-zinc-500
           dark:text-secondary/70"
           >
             Server Invite Link
           </Label>
           <div className="flex items-center mt-2 gap-x-2">
             <Input
               className="bg-zinc-300/50 dark:bg-zinc-300/50 border-0
             focus-visible:ring-0 text-black
             focus-visible:ring-offst-0"
               defaultValue={inviteUrl}
               value={inviteUrl}
               disabled={isLoading}
             />
             <Button disabled={isLoading} onClick={onCopy} size="icon" className="cursor-pointer">
               {copied ? (
                 <Check className="w-4 h-4" />
               ) : (
                 <Copy className="w-4 h-4" />
               )}
             </Button>
           </div>
 
           <Button
             onClick={onNew}
             disabled={isLoading}
             size="sm"
             variant="link"
             className="text-xs text-zinc-500 mt-4 cursor-pointer"
           >
             Generte a new link
             <RefreshCw className="w-4 h-4 ml-2" />
           </Button>
         </div>
       </DialogContent>
     </Dialog>
   );
 };