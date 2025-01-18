import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const loading = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-6">
        <div className="w-full max-w-lg mx-auto">
          <Card className="bg-card">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24">
                  <Skeleton className="w-full h-full rounded-full" />
                </Avatar>
                <Skeleton className="mt-4 h-6 w-32" />
                <Skeleton className="mt-2 h-4 w-24" />
                <Skeleton className="mt-2 h-4 w-48" />

                {/* PROFILE STATS */}
                <div className="w-full mt-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="mt-1 h-3 w-16" />
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="mt-1 h-3 w-16" />
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      <Skeleton className="h-4 w-12" />
                      <Skeleton className="mt-1 h-3 w-16" />
                    </div>
                  </div>
                </div>

                {/* "FOLLOW & EDIT PROFILE" BUTTONS */}
                <Skeleton className="w-full mt-4 h-10" />

                {/* LOCATION & WEBSITE */}
                <div className="w-full mt-6 space-y-2 text-sm">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default loading;
