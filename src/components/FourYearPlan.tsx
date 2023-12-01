import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { DndContext } from '@dnd-kit/core';
import QuarterDropable from './QuarterDropable';
import QuarterDraggable from './QuarterDraggable';

const FourYearPlan = () => {
    return (
        <div>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>FALL</Th>
                        <Th>WINTER</Th>
                        <Th>SPRING</Th>
                        <Th>SUMMER</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td style={{ width: 100, height: 50 }}><DndContext></DndContext></Td>
                        <Td style={{ width: 100, height: 50 }}></Td>
                        <Td style={{ width: 100, height: 50 }}></Td>
                        <Td style={{ width: 100, height: 50 }}></Td>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
        </div>
    );
}

export default FourYearPlan;