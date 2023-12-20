import Box from "@/components/atoms/Box";
import Stack from "@/components/atoms/Stack";
import Typography from "@/components/atoms/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Box background="bg-gradient-diagonal" padding="p-4">
          <Stack>
            <Typography>FEBRUARY 2015</Typography>
            <Typography>FEBRUARY 2015</Typography>
          </Stack>
        </Box>
      </div>
    </main>
  );
}
