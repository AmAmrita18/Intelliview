import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

const UpgradeModal = ({ open, onOpenChange, reason }) => {
  return (
    <Dialog>
      <DialogContent className="border-amber-200/10 min-w-[70vh] max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <div className="flex items-start mb-2 gap-2">
            <AlertCircle className="text-amber-400 ml-2 mt-1" />
            <div>
              <DialogTitle>Upgrade your plan</DialogTitle>
              {reason && (
                <DialogDescription className="text-amber-400 mt-1">
                  {reason}
                </DialogDescription>
              )}
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeModal;
