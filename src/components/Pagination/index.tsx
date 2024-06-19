import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
<<<<<<< HEAD
      direction={["column","row"]}
=======
      direction="row"
>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurent number={1}/>
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
        <PaginationItem number={4}/>
      </Stack>
    </Stack>
  );
}
