        //entries.sort(function (a, b) { return a.name - b.name });

        var table = `<table id="myTable">
        <colgroup>
            <col style="width:10%">
            <col style="width:20%">
            <col style="width:40%">
            <col style="width:15%">
            <col style="width:15%">
        </colgroup>

        <thead style="background: black;color: aliceblue;text-align: center;">
            <tr>
                <th>Entry ID</th>
                <th>Topic/Title</th>
                <th>Description/Process</th>
                <th>Platform/Technology</th>
                <th>Link to site</th>
            </tr>
        </thead>`;

        var tbody = "<tbody>";

        for (var i = 0; i < entries.length; i++) {
            tbody += "<tr>";

                tbody += "<td class='idBox'>" + entries[i].idBox + "</td>";
                tbody += "<td class='titleBox'>" + entries[i].titleBox + "</td>";
                tbody += "<td class='description'>" + entries[i].description + "</td>";
                tbody += "<td class='techBox'>" + entries[i].techBox + "</td>";
                tbody += "<td class='linkBox'>" + entries[i].linkBox + "</td>";

            tbody += "</tr>";
        }

        tbody += "</tbody>";

        table += tbody;
        document.getElementById("content").innerHTML = table;

        // let obj = entries.find(o => o.idBox === '016');
        // alert(obj.description);