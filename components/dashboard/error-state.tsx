"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "Failed to load data. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="bg-card border border-destructive/30 rounded-xl p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center text-center py-8">
        <div className="h-14 w-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
          <AlertCircle className="h-7 w-7 text-destructive" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-sm">{message}</p>
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="outline"
            className="gap-2 border-border hover:bg-muted"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
}

interface ErrorBoundaryFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

export function ErrorBoundaryFallback({
  error,
  resetErrorBoundary,
}: ErrorBoundaryFallbackProps) {
  return (
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <div className="bg-card border border-destructive/30 rounded-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            We encountered an unexpected error while loading the dashboard.
          </p>
          <pre className="text-xs text-destructive bg-destructive/10 p-3 rounded-lg mb-6 max-w-full overflow-auto">
            {error.message}
          </pre>
          {resetErrorBoundary && (
            <Button
              onClick={resetErrorBoundary}
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <RefreshCw className="h-4 w-4" />
              Reload Dashboard
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
