import React from 'react';
import './Content.css';
function Table(){
    return(
        <table >
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>Year of passed out</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Sabari</td>
                <td>153</td>
                <td>Cse</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>2</td>
                <td>john</td>
                <td>201</td>
                <td>IT</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>3</td>
                <td>sam</td>
                <td>203</td>
                <td>Ece</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Jack</td>
                <td>205</td>
                <td>AIml</td>
                <td>2025</td>
            </tr>
        </table>
    )
}

export default Table;