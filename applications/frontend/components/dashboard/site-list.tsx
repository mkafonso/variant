import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@variant/ui/components/card'

export function SiteList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-md bg-zinc-600"></div>
              <div>
                <CardTitle className="flex items-end gap-2 text-base">
                  Meu portfólio
                </CardTitle>
                <CardDescription>https://github.com/mkafonso</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
