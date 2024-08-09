import { CircleAlertIcon } from 'lucide-react';

export default function MissingKeyPage() {
  return (
    <div className="flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-md bg-primary p-6 text-center shadow-lg">
        <div className="flex items-center justify-center">
          <CircleAlertIcon className="mr-4 h-8 w-8 text-primary-foreground" />
          <div>
            <h2 className="text-2xl font-bold text-primary-foreground">FAL Key is missing</h2>
            <p className="mt-2 text-primary-foreground">
              Check your FAL_KEY value in .env.local file
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
