import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic"; //tive que fazer isso para o chart funcionar, pois ele é feito em javascript e o next nao entende
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
}); //tive que fazer isso para o chart funcionar, pois ele é feito em javascript e o next nao entende


const options = {
  chart: {
    toolbar: {
      show: false,
      
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard(){
  return(
    <Flex direction="column" h="100vh">
      <Header/>

      <Flex  w="100%" my="6" mx="auto" px="6" maxWidth={1480}>
        <SideBar/>

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start" >
          
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>

            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}