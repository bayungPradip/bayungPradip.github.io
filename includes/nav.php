<ul>
	<?php foreach($nav as $item){ ?>
		<?php 
			echo "
			<li><a href=$item[link]>$item[name]</a></li>
	";
		?>
	<?php } ?>
</ul>
