/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/jzujHEeYi4j
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export function HomePage() {
  return (
    (<div key="1" className="items-center justify-center gap-2 bg-blue-gray-500">
      <div
        className="w-full min-h-[400px] items-center justify-center py-6 gap-4 md:gap-8 lg:py-12 flex">
        <Card className="w-full max-w-sm bg-blue-100">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-blue-800">Find a Buddy</CardTitle>
            <CardDescription>
              Connect with a buddy and stay updated with the latest news, events, and stories from the University of
              Florida.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4">
              <Input placeholder="Enter your Name" type="text" />
              <Button className="w-full bg-blue-500 text-white">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm bg-blue-100">
          <CardHeader className="p-4 pb-0">
            <CardTitle className="text-2xl font-bold text-blue-800">Select Your Map Location</CardTitle>
            <CardDescription>Choose your preferred map location for updates and events.</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid gap-4">
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="campus">Campus</SelectItem>
                    <SelectItem value="downtown">Downtown</SelectItem>
                    <SelectItem value="sports">Sports Complex</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-blue-500 text-white">Confirm Location</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}