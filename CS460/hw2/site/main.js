function main() {
    $('.add-form').hide();
    $('.bookshelf').hide();
    $('.options').on('click', function() {
        $(this).next().slideToggle(400);
    })

    $('.submit-btn').on('click', function() {
        submitNewBook();
        $('#add')[0].reset();
    })
}

function submitNewBook() {
    var title = document.getElementById('titleIn').value;
    var author = document.getElementById('authorIn').value;
    var totalPages = document.getElementById('totalPagesIn').valueAsNumber;
    var pagesRead = document.getElementById('pagesReadIn').valueAsNumber;

    if (pagesRead < 0) {
        alert("Can't have less than 0 pages read!");
        return;
    }
    else if (pagesRead > totalPages) {
        alert("Pages read is greater than total number of pages");
        return;
    }
    else if (title.length === 0 || author.length === 0 || isNaN(totalPages) || isNaN(pagesRead)) {
        alert("Invalid input");
        return;
    }
    else {
        /* ADD BOOK TO BOOKSHELF */
        var percentage = (pagesRead/totalPages) * 100;
        $('.bookshelf').append("<div class='book'><dl><dt class='dtTitle'>" + title + "</dt><dd>by " + author + "</dd><dd>" + pagesRead + " out of " + totalPages + " pages read</dd></dl><div class='progress-bar' style='width:100%;background-color:#ccc; height:30px;'><div style='width:" + percentage + "%; height:30px;background-color:#89e589;'></div></div><div class='editButtons btn-group'><button class='btn btn-primary delete-btn' onclick=\"if (confirm('Are you sure?')) {$(this).closest('.book').remove();} else return false;\">delete</button></div></div>");
    }

}

$(document).ready(main);
