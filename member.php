<?php

	define('title','Member');
	include('includes/header.php');

?>

<div class="content">
	<ul>
		<?php foreach($members as $listMember => $new){?>
		<li><a href="detail.php?$new['']"><?php echo $new['name']; ?></a></li>
		<?php } ?>
	</ul>
</div>

<?php

	include('includes/footer.php');

?>